<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CriteriaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CriteriaRepository::class)]
#[ApiResource()]
class Criteria
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $criteria = null;

    #[ORM\ManyToMany(targetEntity: Contests::class, inversedBy: 'criteria')]
    private Collection $contests;

    public function __construct()
    {
        $this->contests = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCriteria(): ?string
    {
        return $this->criteria;
    }

    public function setCriteria(string $criteria): self
    {
        $this->criteria = $criteria;

        return $this;
    }

    /**
     * @return Collection<int, concours>
     */
    public function getContests(): Collection
    {
        return $this->contests;
    }

    public function addContests(Contests $contests): self
    {
        if (!$this->contests->contains($contests)) {
            $this->contests->add($contests);
        }

        return $this;
    }

    public function removeContests(Contests $contests): self
    {
        $this->contests->removeElement($contests);

        return $this;
    }
}
