<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\EspacePublicitaireRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EspacePublicitaireRepository::class)]
#[ApiResource()]
class EspacePublicitaire
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?bool $etat = null;

    #[ORM\Column(length: 255)]
    private ?string $name_place = null;

    #[ORM\Column]
    private ?int $height_px = null;

    #[ORM\Column]
    private ?int $width_px = null;

    #[ORM\Column]
    private ?int $price_reference = null;

    #[ORM\OneToMany(mappedBy: 'espace_publicitaire', targetEntity: Annonce::class)]
    private Collection $annonce;

    public function __construct()
    {
        $this->annonce = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isEtat(): ?bool
    {
        return $this->etat;
    }

    public function setEtat(bool $etat): self
    {
        $this->etat = $etat;

        return $this;
    }

    public function getNamePlace(): ?string
    {
        return $this->name_place;
    }

    public function setNamePlace(string $name_place): self
    {
        $this->name_place = $name_place;

        return $this;
    }

    public function getHeightPx(): ?int
    {
        return $this->height_px;
    }

    public function setHeightPx(int $height_px): self
    {
        $this->height_px = $height_px;

        return $this;
    }

    public function getWidthPx(): ?int
    {
        return $this->width_px;
    }

    public function setWidthPx(int $width_px): self
    {
        $this->width_px = $width_px;

        return $this;
    }

    public function getPriceReference(): ?int
    {
        return $this->price_reference;
    }

    public function setPriceReference(int $price_reference): self
    {
        $this->price_reference = $price_reference;

        return $this;
    }

    /**
     * @return Collection<int, Annonce>
     */
    public function getAnnonce(): Collection
    {
        return $this->annonce;
    }

    public function addAnnonce(Annonce $annonce): self
    {
        if (!$this->annonce->contains($annonce)) {
            $this->annonce->add($annonce);
            $annonce->setEspacePublicitaire($this);
        }

        return $this;
    }

    public function removeAnnonce(Annonce $annonce): self
    {
        if ($this->annonce->removeElement($annonce)) {
            // set the owning side to null (unless already changed)
            if ($annonce->getEspacePublicitaire() === $this) {
                $annonce->setEspacePublicitaire(null);
            }
        }

        return $this;
    }
}
