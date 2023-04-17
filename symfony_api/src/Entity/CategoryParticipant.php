<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CategoryParticipantRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoryParticipantRepository::class)]
#[ApiResource()]
class CategoryParticipant
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $category_participant = null;

    #[ORM\ManyToMany(targetEntity: Contests::class, inversedBy: 'category_participant')]
    private Collection $contests;

    public function __construct()
    {
        $this->contests = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCategoryParticipant(): ?string
    {
        return $this->category_participant;
    }

    public function setCategoryParticipant(string $category_participant): self
    {
        $this->category_participant = $category_participant;

        return $this;
    }

    /**
     * @return Collection<int, contests>
     */
    public function getContests(): Collection
    {
        return $this->contests;
    }

    public function addContests(Contests $contest): self
    {
        if (!$this->contests->contains($contest)) {
            $this->contests->add($contest);
        }

        return $this;
    }

    public function removeContests(Contests $contest): self
    {
        $this->contests->removeElement($contest);

        return $this;
    }
}
