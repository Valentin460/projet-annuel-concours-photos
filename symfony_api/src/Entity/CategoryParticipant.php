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

    #[ORM\ManyToMany(targetEntity: Concours::class, inversedBy: 'category_participant')]
    private Collection $concours;

    public function __construct()
    {
        $this->concours = new ArrayCollection();
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
     * @return Collection<int, concours>
     */
    public function getConcours(): Collection
    {
        return $this->concours;
    }

    public function addConcour(Concours $concour): self
    {
        if (!$this->concours->contains($concour)) {
            $this->concours->add($concour);
        }

        return $this;
    }

    public function removeConcour(Concours $concour): self
    {
        $this->concours->removeElement($concour);

        return $this;
    }
}
